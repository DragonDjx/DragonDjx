import axios from 'axios';

async function calcPrecoPrazo(origin, destination) {
    const baseUrl = 'https://cors-anywhere.herokuapp.com/http://ws.correios.com.br/calculador';
    const apiCorreios = axios.create({ baseURL: baseUrl });

    const defaultArgs = {
        serviceType: "04014",
        format: 1,
        origin: origin,
        destination: destination,
        weight: "0.63",
        length: 30.0,
        height: 7.0,
        width: 12.0,
        diameter: 38.0,
        receivementWarning: "S",
        responseType: "xml"
    };

    const url = (`/CalcPrecoPrazo.aspx?` +
        `nCdServico=${defaultArgs.serviceType}` +
        `&nCdFormato=${defaultArgs.format}` +
        `&sCepOrigem=${defaultArgs.origin}` +
        `&sCepDestino=${defaultArgs.destination}` +
        `&nVlPeso=${defaultArgs.weight}` +
        `&nVlComprimento=${defaultArgs.length}` +
        `&nVlAltura=${defaultArgs.height}` +
        `&nVlLargura=${defaultArgs.width}` +
        `&nVlDiametro=${defaultArgs.diameter}` +
        `&sCdAvisoRecebimento=${defaultArgs.receivementWarning}` +
        `&StrRetorno=${defaultArgs.responseType}`);

    const xml = await apiCorreios
        .post(url)
        .then(Response => {
            var parser = new DOMParser();
            return parser.parseFromString(Response.data,"text/xml");
        });

    function xmlToJson(xml) {
        var obj = {};

        if (xml.nodeType === 1) {
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (let j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                };
            };
        } else if (xml.nodeType === 3) { obj = xml.nodeValue }

        if (xml.hasChildNodes()) {
            for (let i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    };
                    obj[nodeName].push(xmlToJson(item));
                };
            };
        };
        return obj;
    };

    function jsonFormat(jsonObject) {
        const jsonData = jsonObject.Servicos.cServico;

        return {
            Codigo: jsonData.Codigo["#text"],
            EntregaDomiciliar: jsonData.EntregaDomiciliar["#text"],
            EntregaSabado: jsonData.EntregaSabado["#text"],
            Erro: jsonData.Erro["#text"],
            MsgErro: jsonData.MsgErro["#cdata-section"],
            PrazoEntrega: jsonData.PrazoEntrega["#text"],
            Valor: strToFloat(jsonData.Valor["#text"]),
            ValorAvisoRecebimento: strToFloat(jsonData.ValorAvisoRecebimento["#text"]),
            ValorMaoPropria: strToFloat(jsonData.ValorMaoPropria["#text"]),
            ValorSemAdicionais: strToFloat(jsonData.ValorSemAdicionais["#text"]),
            ValorValorDeclarado: strToFloat(jsonData.ValorValorDeclarado["#text"]),
            obsFim: jsonData.obsFim["#text"]
        };
    };

    function strToFloat(inputString) {
        inputString = inputString.replace(/,/g, '.');
        return parseFloat(inputString);
    }

    const data = xmlToJson(xml);

    return jsonFormat(data);
}

export default calcPrecoPrazo;
