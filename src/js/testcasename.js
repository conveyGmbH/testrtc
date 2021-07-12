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
    AUDIOCAPTURE: 'Check audio capture, please speak into the microphone',
    CHECKRESOLUTION240: 'Check video capture, resolution 320x240',
    CHECKRESOLUTION480: 'Check video capture, resolution 640x480',
    CHECKRESOLUTION720: 'Check video capture, resolution 1280x720',
    CHECKSUPPORTEDRESOLUTIONS: 'Check supported camera resolutions',
    DATATHROUGHPUTRELAY: 'Check data throughput - Relay',
    DATATHROUGHPUT: 'Check data throughput - Host',
    NETWORKLATENCY: 'Check network latency',
    NETWORKLATENCYRELAY: 'Check network latency - Relay',
    UDPENABLED: 'Check Udp enabled',
    TCPENABLED: 'Check Tcp Relay enabled',
    IPV6ENABLED: 'Check Ipv6 enabled',
    VIDEOBANDWIDTHRELAY: 'Check video bandwidth - Relay',
    VIDEOBANDWIDTH: 'Check video bandwidth - Host',
    RELAYCONNECTIVITY: 'Check relay connectivity',
    REFLEXIVECONNECTIVITY: 'Check reflexive connectivity',
    HOSTCONNECTIVITY: 'Check host connectivity'
  };
  return this.testCases;
}

var testCaseName = new TestCaseNames();
