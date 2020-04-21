<template>
  <div id="grid">
    <ext-searchfield
      id="searchF"
      placeholder="Search"
      autoCapitalize="true"
      shadow="true"
      height="50"
      padding="5"
      margin="20"
    >
    </ext-searchfield>
    <ext-container
      padding="10"
      layout="fit"
      fitToParent="true"
      height="100%"
      width="100%"
    >
      <ext-grid
      :title="grid.title"
      height="720px"
      :store="grid.store"
      scrollable="true"
      :columns="grid.columns"
      shadow="true">
    </ext-grid>
    </ext-container>
    {{ grid.country }}
  </div>  
</template>

<script>
var data1 = []

var data2 = []

loadData()

function loadData (searchField = '') {
  Ext.Ajax.request({
    url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '3dc7140d9amsh145e885af81b8d2p1c845bjsnc29f7128f792'
    },
    method: 'GET',
    params: {
      'country': searchField
    },
    callback: function(options, success, response) {
      var wat = JSON.parse(response.responseText)
      data1 = wat.data.covid19Stats
      if (searchField) {
        data2 = []
      }
      data1.sort((a, b) => {
        return a.country.localeCompare(b.country)
      })
      data1.forEach(addAllCountry)
      data2.sort((a, b) => {
        return b.confirmed - a.confirmed
      })
      data2.forEach((val, key) => {
        val.top = key + 1
      })
      store.setData(data2)
    }
  })
}

function addAllCountry (value, key) {
  var newCountry = {
    country: value.country,
    confirmed: value.confirmed,
    deaths: value.deaths,
    recovered: value.recovered,
    lastUpdate: value.lastUpdate
  }

  if (data2.length == 0) {
    data2.push(newCountry)
  } else {
    var lastKey = data2.length - 1
    
    if (value.country === data2[lastKey].country) {
      data2[lastKey].confirmed += value.confirmed
      data2[lastKey].deaths += value.deaths
      data2[lastKey].recovered += value.recovered
    } else {
      data2.push(newCountry)
    }
  }
}

var store = Ext.create('Ext.data.Store', {
  fields: ['city', 'province', 'country', 'lastUpdate', 'confirmed', 'deaths', 'recovered'],
  data: data2,
  storeId: 'peronsStore'
})

Ext.onReady(() => {
  var country = Ext.getCmp('searchF')
  country.addListener('action', (sender, e) => {
    loadData(country.getValue())
  })
  country.addListener('clearicontap', (sender, input, e) => {
    loadData()
  })
}, {}, {
  delay: 1000
})

export default {
  name: 'GridComponent',
  data () {
    return {
      grid: {
        title: 'List of Countries',

        store: 'peronsStore',

        columns: `[
          { "text": "TOP", "dataIndex": "top", "minWidth": "2%" },
          { "text": "Country", "dataIndex": "country", "minWidth": "20%" },
          { "text": "Last Update", "dataIndex": "lastUpdate", "minWidth": "20%" },
          { "text": "Confirmed", "dataIndex": "confirmed", "minWidth": "20%" },
          { "text": "Deaths", "dataIndex": "deaths", "minWidth": "15%" },
          { "text": "Recovered", "dataIndex": "recovered", "minWidth": "20%" }
        ]`,

        data: data1
      }
    }
  },
  methods: {
    // 
  }
}

</script>
