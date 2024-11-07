ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([598363.986187, 1154906.544945, 736380.834511, 1244870.808701]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bharathapuzha_1 = new ol.format.GeoJSON();
var features_Bharathapuzha_1 = format_Bharathapuzha_1.readFeatures(json_Bharathapuzha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Bharathapuzha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_1.addFeatures(features_Bharathapuzha_1);
var lyr_Bharathapuzha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_1, 
                style: style_Bharathapuzha_1,
                popuplayertitle: "Bharathapuzha",
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_1.png" /> Bharathapuzha'
            });
var format_Geology_2 = new ol.format.GeoJSON();
var features_Geology_2 = format_Geology_2.readFeatures(json_Geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_2.addFeatures(features_Geology_2);
var lyr_Geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_2, 
                style: style_Geology_2,
                popuplayertitle: "Geology",
                interactive: false,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_2_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/Geology_2_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/Geology_2_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/Geology_2_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/Geology_2_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/Geology_2_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/Geology_2_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/Geology_2_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/Geology_2_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/Geology_2_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/Geology_2_10.png" /> Tank/WB/River<br />'
        });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: "Road",
                interactive: false,
                title: '<img src="styles/legend/Road_3.png" /> Road'
            });
var format_STREAM_4 = new ol.format.GeoJSON();
var features_STREAM_4 = format_STREAM_4.readFeatures(json_STREAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_STREAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAM_4.addFeatures(features_STREAM_4);
var lyr_STREAM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAM_4, 
                style: style_STREAM_4,
                popuplayertitle: "STREAM",
                interactive: false,
    title: 'STREAM<br />\
    <img src="styles/legend/STREAM_4_0.png" /> 0<br />\
    <img src="styles/legend/STREAM_4_1.png" /> 1<br />\
    <img src="styles/legend/STREAM_4_2.png" /> 2<br />\
    <img src="styles/legend/STREAM_4_3.png" /> 3<br />\
    <img src="styles/legend/STREAM_4_4.png" /> 4<br />\
    <img src="styles/legend/STREAM_4_5.png" /> 5<br />'
        });
var format_WATERBODY_5 = new ol.format.GeoJSON();
var features_WATERBODY_5 = format_WATERBODY_5.readFeatures(json_WATERBODY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_WATERBODY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERBODY_5.addFeatures(features_WATERBODY_5);
var lyr_WATERBODY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERBODY_5, 
                style: style_WATERBODY_5,
                popuplayertitle: "WATERBODY",
                interactive: false,
                title: '<img src="styles/legend/WATERBODY_5.png" /> WATERBODY'
            });
var format_CHECKcheckdam_6 = new ol.format.GeoJSON();
var features_CHECKcheckdam_6 = format_CHECKcheckdam_6.readFeatures(json_CHECKcheckdam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_CHECKcheckdam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHECKcheckdam_6.addFeatures(features_CHECKcheckdam_6);
var lyr_CHECKcheckdam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHECKcheckdam_6, 
                style: style_CHECKcheckdam_6,
                popuplayertitle: "CHECK — checkdam",
                interactive: true,
                title: '<img src="styles/legend/CHECKcheckdam_6.png" /> CHECK — checkdam'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bharathapuzha_1.setVisible(true);lyr_Geology_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_STREAM_4.setVisible(true);lyr_WATERBODY_5.setVisible(true);lyr_CHECKcheckdam_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bharathapuzha_1,lyr_Geology_2,lyr_Road_3,lyr_STREAM_4,lyr_WATERBODY_5,lyr_CHECKcheckdam_6];
lyr_Bharathapuzha_1.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Road_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_STREAM_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_WATERBODY_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CHECKcheckdam_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'name1': 'name1', 'PHOTO': 'PHOTO', });
lyr_Bharathapuzha_1.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Geology_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Road_3.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_STREAM_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_WATERBODY_5.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_CHECKcheckdam_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'name1': 'TextEdit', 'PHOTO': 'ExternalResource', });
lyr_Bharathapuzha_1.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Road_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_STREAM_4.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_WATERBODY_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CHECKcheckdam_6.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'name1': 'inline label - always visible', 'PHOTO': 'inline label - always visible', });
lyr_CHECKcheckdam_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});