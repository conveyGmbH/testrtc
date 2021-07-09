/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* exported testCaseName */
'use strict';

/*  In order to make strings easier to translate all test case names should be
 *  added here.
 *  TODO: Add/create new file containing the remainder of strings like error
 *  messages and general information.
 */

// Enumerate test case names.
function TestCaseNames() {
  this.testCases = {
    AUDIOCAPTURE: 'Check capture, please speak into the microphone',
    CHECKRESOLUTION240: 'Check resolution 320x240',
    CHECKRESOLUTION480: 'Check resolution 640x480',
    CHECKRESOLUTION720: 'Check resolution 1280x720',
    CHECKSUPPORTEDRESOLUTIONS: 'Check supported camera resolutions',
    DATATHROUGHPUT: 'Check data throughput',
    IPV6ENABLED: 'Check Ipv6 enabled',
    NETWORKLATENCY: 'Check network latency',
    NETWORKLATENCYRELAY: 'Check network latency - Relay',
    UDPENABLED: 'Check Udp enabled',
    TCPENABLED: 'Check Tcp enabled',
    VIDEOBANDWIDTH: 'Check video bandwidth',
    RELAYCONNECTIVITY: 'Check relay connectivity',
    REFLEXIVECONNECTIVITY: 'Check reflexive connectivity',
    HOSTCONNECTIVITY: 'Check host connectivity'
  };
  return this.testCases;
}

var testCaseName = new TestCaseNames();
