(function(window) {
  function basePath() {
    var regexp = new RegExp('js/app.js');
    var script = $('script').filter(function(i, el) {
      return el.src.match(regexp);
    })[0]

    var base = script.src.substr(window.location.protocol.length + window.location.host.length + 2, script.src.length);

    return base.replace('/js/app.js', '');
  }

  var app = window.angular.module('docs', ['cfp.hotkeys'])

  app.value('pages', {"/":{"title":"Home","summary":"Home <small class=\"text-muted\">section</small>","path":"/","version":"v2.0"},"/topics/basics/batches/":{"title":"Batches","summary":"Batches <small class=\"text-muted\">section</small>","path":"/topics/basics/batches/","version":"v2.0"},"/topics/basics/binding_parameters/":{"title":"Binding Parameters","summary":"Binding Parameters <small class=\"text-muted\">section</small>","path":"/topics/basics/binding_parameters/","version":"v2.0"},"/topics/basics/consistency/":{"title":"Consistency","summary":"Consistency <small class=\"text-muted\">section</small>","path":"/topics/basics/consistency/","version":"v2.0"},"/topics/basics/futures/":{"title":"Futures","summary":"Futures <small class=\"text-muted\">section</small>","path":"/topics/basics/futures/","version":"v2.0"},"/topics/basics/handling_results/":{"title":"Handling Results","summary":"Handling Results <small class=\"text-muted\">section</small>","path":"/topics/basics/handling_results/","version":"v2.0"},"/topics/basics/keyspaces/":{"title":"Keyspaces","summary":"Keyspaces <small class=\"text-muted\">section</small>","path":"/topics/basics/keyspaces/","version":"v2.0"},"/topics/basics/prepared_statements/":{"title":"Prepared Statements","summary":"Prepared Statements <small class=\"text-muted\">section</small>","path":"/topics/basics/prepared_statements/","version":"v2.0"},"/topics/basics/":{"title":"Basics","summary":"Basics <small class=\"text-muted\">section</small>","path":"/topics/basics/","version":"v2.0"},"/topics/basics/schema_metadata/":{"title":"Schema Metadata","summary":"Schema Metadata <small class=\"text-muted\">section</small>","path":"/topics/basics/schema_metadata/","version":"v2.0"},"/topics/basics/uuids/":{"title":"UUIDs","summary":"UUIDs <small class=\"text-muted\">section</small>","path":"/topics/basics/uuids/","version":"v2.0"},"/topics/building/":{"title":"Building","summary":"Building <small class=\"text-muted\">section</small>","path":"/topics/building/","version":"v2.0"},"/topics/configuration/":{"title":"Configuration","summary":"Configuration <small class=\"text-muted\">section</small>","path":"/topics/configuration/","version":"v2.0"},"/topics/faq/":{"title":"FAQ","summary":"FAQ <small class=\"text-muted\">section</small>","path":"/topics/faq/","version":"v2.0"},"/topics/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">section</small>","path":"/topics/logging/","version":"v2.0"},"/topics/metrics/":{"title":"Metrics","summary":"Metrics <small class=\"text-muted\">section</small>","path":"/topics/metrics/","version":"v2.0"},"/topics/":{"title":"Getting Started","summary":"Getting Started <small class=\"text-muted\">section</small>","path":"/topics/","version":"v2.0"},"/topics/security/":{"title":"Security","summary":"Security <small class=\"text-muted\">section</small>","path":"/topics/security/","version":"v2.0"},"/topics/security/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">section</small>","path":"/topics/security/ssl/","version":"v2.0"},"/topics/testing/ccm/":{"title":"Cassandra Cluster Manager (CCM)","summary":"Cassandra Cluster Manager (CCM) <small class=\"text-muted\">section</small>","path":"/topics/testing/ccm/","version":"v2.0"},"/topics/testing/configuration/":{"title":"Configuration","summary":"Configuration <small class=\"text-muted\">section</small>","path":"/topics/testing/configuration/","version":"v2.0"},"/topics/testing/":{"title":"Testing","summary":"Testing <small class=\"text-muted\">section</small>","path":"/topics/testing/","version":"v2.0"},"/topics/testing/running/":{"title":"Running","summary":"Running <small class=\"text-muted\">section</small>","path":"/topics/testing/running/","version":"v2.0"},"/api/cassandra_8h/":{"title":"cassandra.h","summary":"cassandra.h <small class=\"text-muted\">file</small>","path":"/api/cassandra_8h/","version":"v2.0"},"/api/struct_cass_batch/":{"title":"CassBatch","summary":"CassBatch <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_batch/","version":"v2.0"},"/api/struct_cass_cluster/":{"title":"CassCluster","summary":"CassCluster <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_cluster/","version":"v2.0"},"/api/struct_cass_collection/":{"title":"CassCollection","summary":"CassCollection <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_collection/","version":"v2.0"},"/api/struct_cass_future/":{"title":"CassFuture","summary":"CassFuture <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_future/","version":"v2.0"},"/api/struct_cass_inet/":{"title":"CassInet","summary":"CassInet <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_inet/","version":"v2.0"},"/api/struct_cass_iterator/":{"title":"CassIterator","summary":"CassIterator <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_iterator/","version":"v2.0"},"/api/struct_cass_log_message/":{"title":"CassLogMessage","summary":"CassLogMessage <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_log_message/","version":"v2.0"},"/api/struct_cass_metric/":{"title":"CassMetric","summary":"CassMetric <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_metric/","version":"v2.0"},"/api/struct_cass_metrics/":{"title":"CassMetrics","summary":"CassMetrics <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_metrics/","version":"v2.0"},"/api/struct_cass_prepared/":{"title":"CassPrepared","summary":"CassPrepared <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_prepared/","version":"v2.0"},"/api/struct_cass_result/":{"title":"CassResult","summary":"CassResult <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_result/","version":"v2.0"},"/api/struct_cass_row/":{"title":"CassRow","summary":"CassRow <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_row/","version":"v2.0"},"/api/struct_cass_schema/":{"title":"CassSchema","summary":"CassSchema <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_schema/","version":"v2.0"},"/api/struct_cass_schema_meta/":{"title":"CassSchemaMeta","summary":"CassSchemaMeta <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_schema_meta/","version":"v2.0"},"/api/struct_cass_schema_meta_field/":{"title":"CassSchemaMetaField","summary":"CassSchemaMetaField <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_schema_meta_field/","version":"v2.0"},"/api/struct_cass_session/":{"title":"CassSession","summary":"CassSession <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_session/","version":"v2.0"},"/api/struct_cass_ssl/":{"title":"CassSsl","summary":"CassSsl <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_ssl/","version":"v2.0"},"/api/struct_cass_statement/":{"title":"CassStatement","summary":"CassStatement <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_statement/","version":"v2.0"},"/api/struct_cass_uuid/":{"title":"CassUuid","summary":"CassUuid <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_uuid/","version":"v2.0"},"/api/struct_cass_uuid_gen/":{"title":"CassUuidGen","summary":"CassUuidGen <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_uuid_gen/","version":"v2.0"},"/api/struct_cass_value/":{"title":"CassValue","summary":"CassValue <small class=\"text-muted\">struct</small>","path":"/api/struct_cass_value/","version":"v2.0"},"/api/":{"title":"API docs","summary":"API docs <small class=\"text-muted\">index</small>","path":"/api/","version":"v2.0"},"/v1.0/":{"title":"Home","summary":"Home <small class=\"text-muted\">section</small>","path":"/v1.0/","version":"v1.0"},"/v1.0/topics/basics/batches/":{"title":"Batches","summary":"Batches <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/batches/","version":"v1.0"},"/v1.0/topics/basics/binding_parameters/":{"title":"Binding Parameters","summary":"Binding Parameters <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/binding_parameters/","version":"v1.0"},"/v1.0/topics/basics/consistency/":{"title":"Consistency","summary":"Consistency <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/consistency/","version":"v1.0"},"/v1.0/topics/basics/futures/":{"title":"Futures","summary":"Futures <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/futures/","version":"v1.0"},"/v1.0/topics/basics/handling_results/":{"title":"Handling Results","summary":"Handling Results <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/handling_results/","version":"v1.0"},"/v1.0/topics/basics/keyspaces/":{"title":"Keyspaces","summary":"Keyspaces <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/keyspaces/","version":"v1.0"},"/v1.0/topics/basics/prepared_statements/":{"title":"Prepared Statements","summary":"Prepared Statements <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/prepared_statements/","version":"v1.0"},"/v1.0/topics/basics/":{"title":"Basics","summary":"Basics <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/","version":"v1.0"},"/v1.0/topics/basics/schema_metadata/":{"title":"Schema Metadata","summary":"Schema Metadata <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/schema_metadata/","version":"v1.0"},"/v1.0/topics/basics/uuids/":{"title":"UUIDs","summary":"UUIDs <small class=\"text-muted\">section</small>","path":"/v1.0/topics/basics/uuids/","version":"v1.0"},"/v1.0/topics/building/":{"title":"Building","summary":"Building <small class=\"text-muted\">section</small>","path":"/v1.0/topics/building/","version":"v1.0"},"/v1.0/topics/configuration/":{"title":"Configuration","summary":"Configuration <small class=\"text-muted\">section</small>","path":"/v1.0/topics/configuration/","version":"v1.0"},"/v1.0/topics/faq/":{"title":"FAQ","summary":"FAQ <small class=\"text-muted\">section</small>","path":"/v1.0/topics/faq/","version":"v1.0"},"/v1.0/topics/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">section</small>","path":"/v1.0/topics/logging/","version":"v1.0"},"/v1.0/topics/":{"title":"Getting Started","summary":"Getting Started <small class=\"text-muted\">section</small>","path":"/v1.0/topics/","version":"v1.0"},"/v1.0/topics/security/":{"title":"Security","summary":"Security <small class=\"text-muted\">section</small>","path":"/v1.0/topics/security/","version":"v1.0"},"/v1.0/topics/security/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">section</small>","path":"/v1.0/topics/security/ssl/","version":"v1.0"},"/v1.0/api/cassandra_8h/":{"title":"cassandra.h","summary":"cassandra.h <small class=\"text-muted\">file</small>","path":"/v1.0/api/cassandra_8h/","version":"v1.0"},"/v1.0/api/struct_cass_batch/":{"title":"CassBatch","summary":"CassBatch <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_batch/","version":"v1.0"},"/v1.0/api/struct_cass_bytes/":{"title":"CassBytes","summary":"CassBytes <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_bytes/","version":"v1.0"},"/v1.0/api/struct_cass_cluster/":{"title":"CassCluster","summary":"CassCluster <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_cluster/","version":"v1.0"},"/v1.0/api/struct_cass_collection/":{"title":"CassCollection","summary":"CassCollection <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_collection/","version":"v1.0"},"/v1.0/api/struct_cass_decimal/":{"title":"CassDecimal","summary":"CassDecimal <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_decimal/","version":"v1.0"},"/v1.0/api/struct_cass_future/":{"title":"CassFuture","summary":"CassFuture <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_future/","version":"v1.0"},"/v1.0/api/struct_cass_inet/":{"title":"CassInet","summary":"CassInet <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_inet/","version":"v1.0"},"/v1.0/api/struct_cass_iterator/":{"title":"CassIterator","summary":"CassIterator <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_iterator/","version":"v1.0"},"/v1.0/api/struct_cass_log_message/":{"title":"CassLogMessage","summary":"CassLogMessage <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_log_message/","version":"v1.0"},"/v1.0/api/struct_cass_prepared/":{"title":"CassPrepared","summary":"CassPrepared <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_prepared/","version":"v1.0"},"/v1.0/api/struct_cass_result/":{"title":"CassResult","summary":"CassResult <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_result/","version":"v1.0"},"/v1.0/api/struct_cass_row/":{"title":"CassRow","summary":"CassRow <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_row/","version":"v1.0"},"/v1.0/api/struct_cass_schema/":{"title":"CassSchema","summary":"CassSchema <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_schema/","version":"v1.0"},"/v1.0/api/struct_cass_schema_meta/":{"title":"CassSchemaMeta","summary":"CassSchemaMeta <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_schema_meta/","version":"v1.0"},"/v1.0/api/struct_cass_schema_meta_field/":{"title":"CassSchemaMetaField","summary":"CassSchemaMetaField <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_schema_meta_field/","version":"v1.0"},"/v1.0/api/struct_cass_session/":{"title":"CassSession","summary":"CassSession <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_session/","version":"v1.0"},"/v1.0/api/struct_cass_ssl/":{"title":"CassSsl","summary":"CassSsl <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_ssl/","version":"v1.0"},"/v1.0/api/struct_cass_statement/":{"title":"CassStatement","summary":"CassStatement <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_statement/","version":"v1.0"},"/v1.0/api/struct_cass_string/":{"title":"CassString","summary":"CassString <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_string/","version":"v1.0"},"/v1.0/api/struct_cass_uuid/":{"title":"CassUuid","summary":"CassUuid <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_uuid/","version":"v1.0"},"/v1.0/api/struct_cass_uuid_gen/":{"title":"CassUuidGen","summary":"CassUuidGen <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_uuid_gen/","version":"v1.0"},"/v1.0/api/struct_cass_value/":{"title":"CassValue","summary":"CassValue <small class=\"text-muted\">struct</small>","path":"/v1.0/api/struct_cass_value/","version":"v1.0"},"/v1.0/api/":{"title":"API docs","summary":"API docs <small class=\"text-muted\">index</small>","path":"/v1.0/api/","version":"v1.0"}})
  app.factory('basePath', basePath)
  app.provider('search', function() {
    function localSearchFactory($http, $timeout, $q, $rootScope, basePath) {
      $rootScope.searchReady = false;

      var fetch = $http.get(basePath + '/json/search-index.json')
                       .then(function(response) {
                         var index = lunr.Index.load(response.data)
                         $rootScope.searchReady = true;
                         return index;
                       });

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      // (In this case we just resolve the promise immediately as it is not
      // inherently an async process)
      return function(q) {
        return fetch.then(function(index) {
          var results = []
          index.search(q).forEach(function(hit) {
            results.push(hit.ref);
          });
          return results;
        })
      };
    };
    localSearchFactory.$inject = ['$http', '$timeout', '$q', '$rootScope', 'basePath'];

    function webWorkerSearchFactory($q, $rootScope, basePath) {
      $rootScope.searchReady = false;

      var searchIndex = $q.defer();
      var results;
      var worker = new Worker(basePath + '/js/search-worker.js');

      // The worker will send us a message in two situations:
      // - when the index has been built, ready to run a query
      // - when it has completed a search query and the results are available
      worker.onmessage = function(e) {
        switch(e.data.e) {
          case 'ready':
            worker.postMessage({ e: 'load', p: basePath });
            break
          case 'index-ready':
            $rootScope.$apply(function() {
              $rootScope.searchReady = true;
            })
            searchIndex.resolve();
            break;
          case 'query-ready':
            results.resolve(e.data.d);
            break;
        }
      };

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      return function(q) {

        // We only run the query once the index is ready
        return searchIndex.promise.then(function() {

          results = $q.defer();
          worker.postMessage({ e: 'search', q: q });
          return results.promise;
        });
      };
    };
    webWorkerSearchFactory.$inject = ['$q', '$rootScope', 'basePath'];

    return {
      $get: window.Worker ? webWorkerSearchFactory : localSearchFactory
    };
  })

  app.controller('search', [
    '$scope',
    '$sce',
    '$timeout',
    'search',
    'pages',
    'basePath',
    function($scope, $sce, $timeout, search, pages, basePath) {
      $scope.hasResults = false;
      $scope.results = null;
      $scope.current = null;

      function clear() {
        $scope.hasResults = false;
        $scope.results = null;
        $scope.current = null;
      }

      $scope.search = function(version) {
        if ($scope.q.length >= 2) {
          search($scope.q).then(function(ids) {
            var results = []

            ids.forEach(function(id) {
              var page = pages[id];

              if (page.version == version) {
                results.push(page)
              }
            })

            if (results.length > 0) {
              $scope.hasResults = true;
              $scope.results = results;
              $scope.current = 0;
            } else {
              clear()
            }
          })
        } else {
          clear()
        }
      };

      $scope.basePath = basePath;

      $scope.reset = function() {
        $scope.q = null;
        clear()
      }

      $scope.submit = function() {
        var result = $scope.results[$scope.current]

        if (result) {
          $timeout(function() {
            window.location.href = basePath + result.path;
          })
        }
      }

      $scope.summary = function(item) {
        return $sce.trustAsHtml(item.summary);
      }

      $scope.moveDown = function(e) {
        if ($scope.hasResults && $scope.current < ($scope.results.length - 1)) {
          $scope.current++
          e.stopPropagation()
        }
      }

      $scope.moveUp = function(e) {
        if ($scope.hasResults && $scope.current > 0) {
          $scope.current--
          e.stopPropagation()
        }
      }
    }
  ])

  app.directive('search', [
    '$document',
    'hotkeys',
    function($document, hotkeys) {
      return function(scope, element, attrs) {
        hotkeys.add({
          combo: '/',
          description: 'Search docs...',
          callback: function(event, hotkey) {
            event.preventDefault()
            event.stopPropagation()
            element[0].focus()
          }
        })
      }
    }
  ])

  $(function() {
    $('#content').height(
      Math.max(
        $(".side-nav").height(),
        $('#content').height()
      )
    );

    function togglePanelHeadingGlyph(e) {
      $(this).find('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    }

    $('#table-of-contents-panel').on('shown.bs.collapse', togglePanelHeadingGlyph);
    $('#table-of-contents-panel').on('hidden.bs.collapse', togglePanelHeadingGlyph);
    $('#read-more-panel').on('shown.bs.collapse', togglePanelHeadingGlyph);
    $('#read-more-panel').on('hidden.bs.collapse', togglePanelHeadingGlyph);

    // Config ZeroClipboard
    ZeroClipboard.config({
      swfPath: basePath() + '/flash/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover',
      activeClass: 'btn-clipboard-active'
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      var btnHtml = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>'
      $(this).before(btnHtml)
    })

    var zeroClipboard = new ZeroClipboard($('.btn-clipboard'))

    // Handlers for ZeroClipboard

    // Copy to clipboard
    zeroClipboard.on('copy', function (event) {
      var clipboard = event.clipboardData;
      var highlight = $(event.target).parent().nextAll('.highlight').first()
      clipboard.setData('text/plain', highlight.text())
    })

    // Notify copy success and reset tooltip title
    zeroClipboard.on('aftercopy', function (event) {
      $(event.target)
        .attr('title', 'Copied!')
        .tooltip('fixTitle')
        .tooltip('show')
    })

    // Notify copy failure
    zeroClipboard.on('error', function (event) {
      $(event.target)
        .attr('title', 'Flash required')
        .tooltip('fixTitle')
        .tooltip('show')
    })
  })
})(window)
