
var lastFocusWin = -1;
var currentFocusWin = -1;

var window_left = -1;
var window_center = -1;
var window_right = -1;

var tabGallery = -1;

var tabControl = -1;

var tabYoutube = -1;
var tabSearch = -1;
var tabReddit = -1;

var tabSpecial = [];


chrome.contextMenus.removeAll();

chrome.contextMenus.create({
    title: "[Gallery]",
    contexts: ["image"],
    onclick : function(info, tab){
       chrome.tabs.update(tabGallery, {url:info.srcUrl});
    }
});

//https://www.youtube.com/

chrome.contextMenus.create({
    title: "[Youtube]",
    contexts: ["all"],
    documentUrlPatterns : ["https://www.youtube.com/*"],
    onclick : function(info, tab){
        chrome.tabs.update(tabYoutube, {url:info.linkUrl});
    }
});
chrome.contextMenus.create({
    title: "[Reddit]",
    contexts: ["all"],
    documentUrlPatterns : ["https://*.reddit.com/*"],
    onclick : function(info, tab){
        chrome.tabs.update(tabReddit, {url:info.linkUrl});
    }
});


chrome.contextMenus.create({
      title: "[URL] Split",
      contexts: ["link"],
      onclick: function(info, tab) {
        //console.log('Link: ' + info.linkUrl);

        /*
        chrome.windows.create({
                url : 'popup.html',
                tabId: tab.id,
                type: 'popup',
                focused: true
                // incognito, top, left, ...
            });
            */

        QueryHighlighted(lastFocusWin, function(tab){
           chrome.tabs.update(tab.id, {url:info.linkUrl});
        });
        //console.log('window_tabs ' + hTab.id
      }
});

chrome.contextMenus.create({
    title: "[Image] Split",
    contexts: ["image"],
    onclick : function(info, tab){
       chrome.tabs.create({windowId: lastFocusWin, url:info.srcUrl})
    }
});

chrome.contextMenus.create({
    title: "            ",
    contexts: ["image"],
    onclick : function(info, tab){
      
    }
});


chrome.contextMenus.create({
    title: "[URL] Left",
    contexts: ["link"],
    onclick : function(info, tab){
        QueryHighlighted(window_left, function(tab){
          chrome.tabs.create({windowId: window_left, url:info.linkUrl})
           //chrome.tabs.update(tab.id, {url:info.linkUrl});
        });
    }
});

chrome.contextMenus.create({
    title: "[URL] _____ Center",
    contexts: ["link"],
    onclick : function(info, tab){
      QueryHighlighted(window_center, function(tab){
        chrome.tabs.create({windowId: window_center, url:info.linkUrl})
           //chrome.tabs.update(tab.id, {url:info.linkUrl});
        });
    }
});
chrome.contextMenus.create({
    title: "[URL] _____ _____ Right",
    contexts: ["link"],
    onclick : function(info, tab){
      QueryHighlighted(window_right, function(tab){
        chrome.tabs.create({windowId: window_right, url:info.linkUrl})
           //chrome.tabs.update(tab.id, {url:info.linkUrl});
        });
    }
});
/*
chrome.contextMenus.create({
    title: "(View Later)",
    contexts: ["link"],
    onclick : function(info, tab){
        console.log("A Click Home");
    }
});
*/
chrome.contextMenus.create({
    title: "[Search]",
    contexts: ["selection"],
    onclick : function(info, tab){
        GoogleSearch(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "[Translate]",
    contexts: ["selection"],
    onclick : function(info, tab){
        GoogleTranslate(info.selectionText);
    }
});

chrome.contextMenus.create({
    title: "[Google] Left",
    contexts: ["selection"],
    onclick : function(info, tab){
        QueryHighlighted(window_left, function(tab){
          GoogleTab(tab, info.selectionText, window_left);
        });
    }
});

chrome.contextMenus.create({
    title: "[Google] _____ Center",
    contexts: ["selection"],
    onclick : function(info, tab){
        QueryHighlighted(window_center, function(tab){
          GoogleTab(tab, info.selectionText, window_center);
        });
    }
});

chrome.contextMenus.create({
    title: "[Google] _____ _____ Right",
    contexts: ["selection"],
    onclick : function(info, tab){
        QueryHighlighted(window_right, function(tab){
          GoogleTab(tab, info.selectionText, window_right);
        });
    }
});

/*Image contexts*/
chrome.contextMenus.create({
    title: "[Image] Left",
    contexts: ["image"],
    onclick : function(info, tab){
        QueryHighlighted(window_left, function(tab){
          chrome.tabs.create({windowId: window_left, url:info.srcUrl})
        });
    }
});

chrome.contextMenus.create({
    title: "[Image] _____ Center",
    contexts: ["image"],
    onclick : function(info, tab){
        QueryHighlighted(window_center, function(tab){
          chrome.tabs.create({windowId: window_center, url:info.srcUrl})
        });
    }
});

chrome.contextMenus.create({
    title: "[Image] _____ _____ Right",
    contexts: ["image"],
    onclick : function(info, tab){
        QueryHighlighted(window_right, function(tab){
          chrome.tabs.create({windowId: window_right, url:info.srcUrl})
        });
    }
});


chrome.contextMenus.create({
    title: "[Send] Left",
    contexts: ["page"],
    onclick : function(info, tab){
        chrome.tabs.remove(tab.id);
        chrome.tabs.create({windowId: window_left, url:info.pageUrl})
    }
});


chrome.contextMenus.create({
    title: "[Send] _____ Center",
    contexts: ["page"],
    onclick : function(info, tab){
        chrome.tabs.remove(tab.id);
        chrome.tabs.create({windowId: window_center, url:info.pageUrl})
    }
});

chrome.contextMenus.create({
    title: "[Send] _____ _____ Right",
    contexts: ["page"],
    onclick : function(info, tab){
        chrome.tabs.remove(tab.id);
        chrome.tabs.create({windowId: window_right, url:info.pageUrl})
    }
});

chrome.windows.onFocusChanged.addListener(function(winid){
    if(winid == -1)
        return;

    lastFocusWin =currentFocusWin;
    currentFocusWin = winid;
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(currentFocusWin == -1){
    alert("Window not infocus, click a window to focus");
    return;
  }
  if(request.what == 0){
  
    QueryHighlighted(currentFocusWin, function(tab){
        tabControl = tab.id;
        chrome.tabs.update(tabControl, {url:"control.html"});
    });
    
  }

  else if(request.what == 22){
    alert("Gallery Set");
    QueryHighlighted(currentFocusWin, function(tab){
        tabGallery = tab.id;
        tabSpecial.push(tabGallery);
    });
  }
  else if(request.what == 44){
  
    alert("Youtube Tab Set");

    QueryHighlighted(currentFocusWin, function(tab){
        tabYoutube = tab.id;
        tabSpecial.push(tabYoutube);
    });

  }
  else if(request.what == 88){
    alert("Search Tab Set");

    QueryHighlighted(currentFocusWin, function(tab){
        tabSearch = tab.id;
        tabSpecial.push(tabSearch);
    });
  }
  else if(request.what == 111){
    alert("Search Reddit Set");

    QueryHighlighted(currentFocusWin, function(tab){
        tabReddit = tab.id;
        tabSpecial.push(tabReddit);
    });
  }

  else if(request.what == 1){
    window_left = currentFocusWin;
    alert("Left window set");
  }
  else if(request.what == 2){
    window_center = currentFocusWin
    alert("Center window set");
  }
  else if(request.what == 3){
    window_right = currentFocusWin;
    alert("Right window set");
  }

});


function QueryHighlighted(winId, callback){
  chrome.tabs.query({
            windowId: winId}, function(tabs){

            var i;

            for(i=0; i < tabs.length; i++){
                if(tabs[i].highlighted){
                    callback(tabs[i]);
                }
            }
        });
}

function GoogleTab(tab, text, windId){

  var textQuery = text.replace(/ /g, '+');
  var serachUrl = 'https://www.google.com/search?q='+textQuery;
  //chrome.tabs.update(tab.id, {url:serachUrl});
  chrome.tabs.create({windowId: windId, url:serachUrl});
}

function GoogleSearch(text){
  var textQuery = text.replace(/ /g, '+');
  var serachUrl = 'https://www.google.com/search?q='+textQuery;
  chrome.tabs.update(tabSearch, {url:serachUrl});
}

function GoogleTranslate(text){
  GoogleSearch("translate+"+text);
  //chrome.tabs.create({windowId: windId, url:serachUrl});
}

