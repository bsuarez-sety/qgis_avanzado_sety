var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_ndicedeNecesidadPrioritaria_1 = new ol.format.GeoJSON();
var features_ndicedeNecesidadPrioritaria_1 = format_ndicedeNecesidadPrioritaria_1.readFeatures(json_ndicedeNecesidadPrioritaria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndicedeNecesidadPrioritaria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedeNecesidadPrioritaria_1.addFeatures(features_ndicedeNecesidadPrioritaria_1);
var lyr_ndicedeNecesidadPrioritaria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedeNecesidadPrioritaria_1, 
                style: style_ndicedeNecesidadPrioritaria_1,
                popuplayertitle: 'Índice de Necesidad Prioritaria',
                interactive: true,
    title: 'Índice de Necesidad Prioritaria<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_0.png" /> 0.364 - 0.478<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_1.png" /> 0.478 - 0.532<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_2.png" /> 0.532 - 0.554<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_3.png" /> 0.554 - 0.585<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_4.png" /> 0.585 - 0.628<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_5.png" /> 0.628 - 0.679<br />\
    <img src="styles/legend/ndicedeNecesidadPrioritaria_1_6.png" /> 0.679 - 0.895<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_ndicedeNecesidadPrioritaria_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_ndicedeNecesidadPrioritaria_1];
lyr_ndicedeNecesidadPrioritaria_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE MUN', 'NOMGEO': 'NOM MUN', 'area': 'area', 'inp': 'INP', });
lyr_ndicedeNecesidadPrioritaria_1.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'Hidden', 'inp': 'TextEdit', });
lyr_ndicedeNecesidadPrioritaria_1.set('fieldLabels', {'CVE_MUN': 'inline label - visible with data', 'NOMGEO': 'inline label - visible with data', 'inp': 'inline label - visible with data', });
lyr_ndicedeNecesidadPrioritaria_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});