var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ReginIPoniente_etiqueta_1 = new ol.format.GeoJSON();
var features_ReginIPoniente_etiqueta_1 = format_ReginIPoniente_etiqueta_1.readFeatures(json_ReginIPoniente_etiqueta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIPoniente_etiqueta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIPoniente_etiqueta_1.addFeatures(features_ReginIPoniente_etiqueta_1);
var lyr_ReginIPoniente_etiqueta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIPoniente_etiqueta_1, 
                style: style_ReginIPoniente_etiqueta_1,
                popuplayertitle: 'Región I Poniente_etiqueta',
                interactive: false,
                title: '<img src="styles/legend/ReginIPoniente_etiqueta_1.png" /> Región I Poniente_etiqueta'
            });
var format_ReginIINoroeste_etiqueta_2 = new ol.format.GeoJSON();
var features_ReginIINoroeste_etiqueta_2 = format_ReginIINoroeste_etiqueta_2.readFeatures(json_ReginIINoroeste_etiqueta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIINoroeste_etiqueta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIINoroeste_etiqueta_2.addFeatures(features_ReginIINoroeste_etiqueta_2);
var lyr_ReginIINoroeste_etiqueta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIINoroeste_etiqueta_2, 
                style: style_ReginIINoroeste_etiqueta_2,
                popuplayertitle: 'Región II Noroeste_etiqueta',
                interactive: false,
                title: '<img src="styles/legend/ReginIINoroeste_etiqueta_2.png" /> Región II Noroeste_etiqueta'
            });
var format_ReginIIICentro_etiqueta_3 = new ol.format.GeoJSON();
var features_ReginIIICentro_etiqueta_3 = format_ReginIIICentro_etiqueta_3.readFeatures(json_ReginIIICentro_etiqueta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIIICentro_etiqueta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIIICentro_etiqueta_3.addFeatures(features_ReginIIICentro_etiqueta_3);
var lyr_ReginIIICentro_etiqueta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIIICentro_etiqueta_3, 
                style: style_ReginIIICentro_etiqueta_3,
                popuplayertitle: 'Región III Centro_etiqueta',
                interactive: false,
                title: '<img src="styles/legend/ReginIIICentro_etiqueta_3.png" /> Región III Centro_etiqueta'
            });
var format_ReginIVLitoralCentro_etiquetas_4 = new ol.format.GeoJSON();
var features_ReginIVLitoralCentro_etiquetas_4 = format_ReginIVLitoralCentro_etiquetas_4.readFeatures(json_ReginIVLitoralCentro_etiquetas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIVLitoralCentro_etiquetas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIVLitoralCentro_etiquetas_4.addFeatures(features_ReginIVLitoralCentro_etiquetas_4);
var lyr_ReginIVLitoralCentro_etiquetas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIVLitoralCentro_etiquetas_4, 
                style: style_ReginIVLitoralCentro_etiquetas_4,
                popuplayertitle: 'Región IV Litoral Centro_etiquetas',
                interactive: false,
                title: '<img src="styles/legend/ReginIVLitoralCentro_etiquetas_4.png" /> Región IV Litoral Centro_etiquetas'
            });
var format_ReginVNoreste_etiquetas_5 = new ol.format.GeoJSON();
var features_ReginVNoreste_etiquetas_5 = format_ReginVNoreste_etiquetas_5.readFeatures(json_ReginVNoreste_etiquetas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVNoreste_etiquetas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVNoreste_etiquetas_5.addFeatures(features_ReginVNoreste_etiquetas_5);
var lyr_ReginVNoreste_etiquetas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVNoreste_etiquetas_5, 
                style: style_ReginVNoreste_etiquetas_5,
                popuplayertitle: 'Región V Noreste_etiquetas',
                interactive: false,
                title: '<img src="styles/legend/ReginVNoreste_etiquetas_5.png" /> Región V Noreste_etiquetas'
            });
var format_ReginVIOriente_etiqueta_6 = new ol.format.GeoJSON();
var features_ReginVIOriente_etiqueta_6 = format_ReginVIOriente_etiqueta_6.readFeatures(json_ReginVIOriente_etiqueta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIOriente_etiqueta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIOriente_etiqueta_6.addFeatures(features_ReginVIOriente_etiqueta_6);
var lyr_ReginVIOriente_etiqueta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIOriente_etiqueta_6, 
                style: style_ReginVIOriente_etiqueta_6,
                popuplayertitle: 'Región VI Oriente_etiqueta',
                interactive: false,
                title: '<img src="styles/legend/ReginVIOriente_etiqueta_6.png" /> Región VI Oriente_etiqueta'
            });
var format_ReginVIISur_etiquetas_7 = new ol.format.GeoJSON();
var features_ReginVIISur_etiquetas_7 = format_ReginVIISur_etiquetas_7.readFeatures(json_ReginVIISur_etiquetas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIISur_etiquetas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIISur_etiquetas_7.addFeatures(features_ReginVIISur_etiquetas_7);
var lyr_ReginVIISur_etiquetas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIISur_etiquetas_7, 
                style: style_ReginVIISur_etiquetas_7,
                popuplayertitle: 'Región VII Sur_etiquetas',
                interactive: false,
                title: '<img src="styles/legend/ReginVIISur_etiquetas_7.png" /> Región VII Sur_etiquetas'
            });
var format_EmpresasgrandesenYucatn_8 = new ol.format.GeoJSON();
var features_EmpresasgrandesenYucatn_8 = format_EmpresasgrandesenYucatn_8.readFeatures(json_EmpresasgrandesenYucatn_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpresasgrandesenYucatn_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpresasgrandesenYucatn_8.addFeatures(features_EmpresasgrandesenYucatn_8);
cluster_EmpresasgrandesenYucatn_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EmpresasgrandesenYucatn_8
});
var lyr_EmpresasgrandesenYucatn_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EmpresasgrandesenYucatn_8, 
                style: style_EmpresasgrandesenYucatn_8,
                popuplayertitle: 'Empresas grandes en Yucatán',
                interactive: true,
    title: 'Empresas grandes en Yucatán<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_0.png" /> 11<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_1.png" /> 22<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_2.png" /> 23<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_3.png" /> 31<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_4.png" /> 32<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_5.png" /> 33<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_6.png" /> 43<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_7.png" /> 46<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_8.png" /> 48<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_9.png" /> 49<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_10.png" /> 51<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_11.png" /> 52<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_12.png" /> 53<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_13.png" /> 54<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_14.png" /> 56<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_15.png" /> 61<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_16.png" /> 62<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_17.png" /> 71<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_18.png" /> 72<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_19.png" /> 81<br />\
    <img src="styles/legend/EmpresasgrandesenYucatn_8_20.png" /> 93<br />' });
var group_ReginVII = new ol.layer.Group({
                                layers: [lyr_ReginVIISur_etiquetas_7,],
                                fold: 'open',
                                title: 'Región VII'});
var group_ReginVI = new ol.layer.Group({
                                layers: [lyr_ReginVIOriente_etiqueta_6,],
                                fold: 'open',
                                title: 'Región VI'});
var group_ReginV = new ol.layer.Group({
                                layers: [lyr_ReginVNoreste_etiquetas_5,],
                                fold: 'open',
                                title: 'Región V'});
var group_ReginIV = new ol.layer.Group({
                                layers: [lyr_ReginIVLitoralCentro_etiquetas_4,],
                                fold: 'open',
                                title: 'Región IV'});
var group_ReginIII = new ol.layer.Group({
                                layers: [lyr_ReginIIICentro_etiqueta_3,],
                                fold: 'open',
                                title: 'Región III'});
var group_ReginII = new ol.layer.Group({
                                layers: [lyr_ReginIINoroeste_etiqueta_2,],
                                fold: 'open',
                                title: 'Región II'});
var group_ReginI = new ol.layer.Group({
                                layers: [lyr_ReginIPoniente_etiqueta_1,],
                                fold: 'open',
                                title: 'Región I'});

lyr_OSMStandard_0.setVisible(true);lyr_ReginIPoniente_etiqueta_1.setVisible(true);lyr_ReginIINoroeste_etiqueta_2.setVisible(true);lyr_ReginIIICentro_etiqueta_3.setVisible(true);lyr_ReginIVLitoralCentro_etiquetas_4.setVisible(true);lyr_ReginVNoreste_etiquetas_5.setVisible(true);lyr_ReginVIOriente_etiqueta_6.setVisible(true);lyr_ReginVIISur_etiquetas_7.setVisible(true);lyr_EmpresasgrandesenYucatn_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_ReginI,group_ReginII,group_ReginIII,group_ReginIV,group_ReginV,group_ReginVI,group_ReginVII,lyr_EmpresasgrandesenYucatn_8];
lyr_ReginIPoniente_etiqueta_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_ReginIINoroeste_etiqueta_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_ReginIIICentro_etiqueta_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_ReginIVLitoralCentro_etiquetas_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_ReginVNoreste_etiquetas_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_ReginVIOriente_etiqueta_6.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_ReginVIISur_etiquetas_7.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'Nombre región', 'super': 'super', 'nom_reg': 'Región', });
lyr_EmpresasgrandesenYucatn_8.set('fieldAliases', {'id': 'id', 'clee': 'clee', 'nom_estab': 'Nombre establecimiento', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'Actividad', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'Clave municipio', 'municipio': 'Municipio', 'cve_loc': 'Clave localidad', 'localidad': 'Localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', 'pyme': 'pyme', 'sector': 'Sector SCIAN', 'tipo': 'tipo', 'region': 'Región', });
lyr_ReginIPoniente_etiqueta_1.set('fieldImages', {'CVEGEO': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_ReginIINoroeste_etiqueta_2.set('fieldImages', {'CVEGEO': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_ReginIIICentro_etiqueta_3.set('fieldImages', {'CVEGEO': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_ReginIVLitoralCentro_etiquetas_4.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_ReginVNoreste_etiquetas_5.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_ReginVIOriente_etiqueta_6.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_ReginVIISur_etiquetas_7.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'Hidden', 'NOMGEO': 'TextEdit', 'super': 'Hidden', 'nom_reg': 'TextEdit', });
lyr_EmpresasgrandesenYucatn_8.set('fieldImages', {'id': 'Hidden', 'clee': 'Hidden', 'nom_estab': 'TextEdit', 'raz_social': 'Hidden', 'codigo_act': 'Hidden', 'nombre_act': 'TextEdit', 'per_ocu': 'Hidden', 'tipo_vial': 'Hidden', 'nom_vial': 'Hidden', 'tipo_v_e_1': 'Hidden', 'nom_v_e_1': 'Hidden', 'tipo_v_e_2': 'Hidden', 'nom_v_e_2': 'Hidden', 'tipo_v_e_3': 'Hidden', 'nom_v_e_3': 'Hidden', 'numero_ext': 'Hidden', 'letra_ext': 'Hidden', 'edificio': 'Hidden', 'edificio_e': 'Hidden', 'numero_int': 'Hidden', 'letra_int': 'Hidden', 'tipo_asent': 'Hidden', 'nomb_asent': 'Hidden', 'tipoCenCom': 'Hidden', 'nom_CenCom': 'Hidden', 'num_local': 'Hidden', 'cod_postal': 'Hidden', 'cve_ent': 'Hidden', 'entidad': 'Hidden', 'cve_mun': 'Range', 'municipio': 'TextEdit', 'cve_loc': 'Range', 'localidad': 'TextEdit', 'ageb': 'Hidden', 'manzana': 'Hidden', 'telefono': 'Hidden', 'correoelec': 'Hidden', 'www': 'Hidden', 'tipoUniEco': 'Hidden', 'latitud': 'Hidden', 'longitud': 'Hidden', 'fecha_alta': 'Hidden', 'pyme': 'Hidden', 'sector': 'Range', 'tipo': 'Hidden', 'region': 'Range', });
lyr_ReginIPoniente_etiqueta_1.set('fieldLabels', {'NOMGEO': 'no label', 'nom_reg': 'no label', });
lyr_ReginIINoroeste_etiqueta_2.set('fieldLabels', {'NOMGEO': 'no label', 'nom_reg': 'no label', });
lyr_ReginIIICentro_etiqueta_3.set('fieldLabels', {'NOMGEO': 'no label', 'nom_reg': 'no label', });
lyr_ReginIVLitoralCentro_etiquetas_4.set('fieldLabels', {'NOMGEO': 'header label - visible with data', 'nom_reg': 'no label', });
lyr_ReginVNoreste_etiquetas_5.set('fieldLabels', {'NOMGEO': 'no label', 'nom_reg': 'no label', });
lyr_ReginVIOriente_etiqueta_6.set('fieldLabels', {'NOMGEO': 'no label', 'nom_reg': 'no label', });
lyr_ReginVIISur_etiquetas_7.set('fieldLabels', {'NOMGEO': 'no label', 'nom_reg': 'header label - visible with data', });
lyr_EmpresasgrandesenYucatn_8.set('fieldLabels', {'nom_estab': 'header label - visible with data', 'nombre_act': 'header label - visible with data', 'cve_mun': 'header label - visible with data', 'municipio': 'header label - visible with data', 'cve_loc': 'header label - visible with data', 'localidad': 'header label - visible with data', 'sector': 'header label - visible with data', 'region': 'header label - visible with data', });
lyr_EmpresasgrandesenYucatn_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});