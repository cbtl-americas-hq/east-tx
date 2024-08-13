var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TargetTradeAreas_1 = new ol.format.GeoJSON();
var features_TargetTradeAreas_1 = format_TargetTradeAreas_1.readFeatures(json_TargetTradeAreas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas_1.addFeatures(features_TargetTradeAreas_1);
var lyr_TargetTradeAreas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas_1, 
                style: style_TargetTradeAreas_1,
                interactive: false,
    title: 'Target Trade Areas<br />\
    <img src="styles/legend/TargetTradeAreas_1_0.png" /> viable<br />'
        });
var format_ProposedTerritory_2 = new ol.format.GeoJSON();
var features_ProposedTerritory_2 = format_ProposedTerritory_2.readFeatures(json_ProposedTerritory_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedTerritory_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedTerritory_2.addFeatures(features_ProposedTerritory_2);
var lyr_ProposedTerritory_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProposedTerritory_2, 
                style: style_ProposedTerritory_2,
                interactive: false,
                title: '<img src="styles/legend/ProposedTerritory_2.png" /> Proposed Territory'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TargetTradeAreas_1.setVisible(true);lyr_ProposedTerritory_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TargetTradeAreas_1,lyr_ProposedTerritory_2];
lyr_TargetTradeAreas_1.set('fieldAliases', {'id': 'id', 'lat': 'lat', 'lon': 'lon', 'target_cat': 'target_cat', 'operator': 'operator', 'state': 'state', 'name': 'name', 'dev_type': 'dev_type', 'dma': 'dma', 'last_updat': 'last_updat', 'decision': 'decision', });
lyr_ProposedTerritory_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TargetTradeAreas_1.set('fieldImages', {'id': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'target_cat': 'TextEdit', 'operator': 'TextEdit', 'state': 'TextEdit', 'name': 'TextEdit', 'dev_type': 'TextEdit', 'dma': 'TextEdit', 'last_updat': 'TextEdit', 'decision': 'TextEdit', });
lyr_ProposedTerritory_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TargetTradeAreas_1.set('fieldLabels', {'id': 'no label', 'lat': 'no label', 'lon': 'no label', 'target_cat': 'no label', 'operator': 'no label', 'state': 'no label', 'name': 'no label', 'dev_type': 'no label', 'dma': 'no label', 'last_updat': 'no label', 'decision': 'no label', });
lyr_ProposedTerritory_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ProposedTerritory_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});