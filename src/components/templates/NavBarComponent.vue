<template>
  <div id="navBarComponent">
    <ext-titlebar
      :title="title"
      docked="top"
      platformConfig="{phone: {titleAlign: 'center'}}"
    >
      <ext-menuitem
        :text="allCountries"
        align="right"
        style="float:'right';"
        iconCls="x-fa fa-list-ol"
        href="/list-of-countries"
      >
      </ext-menuitem>
      <ext-menuitem
        :text="topCountries"
        align="right"
        iconCls="x-fa fa-chart-bar"
        href="/"
      >
      </ext-menuitem>
      <ext-button
        align="right"
        iconCls="x-fa fa-ellipsis-v"
        arrow="false"
      >
        <ext-menu>
          <ext-menuitem
            text="Settings"
            iconCls="x-fa fa-cog"
          >
          </ext-menuitem>
          <ext-menuitem
            text="Help"
            iconCls="x-fa fa-question-circle"
          >
          </ext-menuitem>
        </ext-menu>
      </ext-button>
    </ext-titlebar>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data () {
    return {
      title: 'COVID-10 Statistics',
      topCountries: 'Top Countries',
      allCountries: 'List of Countries'
    }
  },
  methods: {
    // 
  }
}
</script>