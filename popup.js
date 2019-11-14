// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('execute').addEventListener('click', function() {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(
        tabs
      ) {
        //redirect to edit if current url not ends with '/edit'
        let currentUrl = tabs[0].url;
        if (!currentUrl.includes('/edit')) {
          let editUrl = currentUrl + '/edit';
          chrome.tabs.update({ url: editUrl });
        }
      });
    });
  },
  false
);
