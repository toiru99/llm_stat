---
type: Model
title: ERNIE 5.0 Thinking Preview
creator: Baidu
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.0, z: 0.22, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.07, r: 48.9, estimated: false }  # 코딩
  agentic: { s: 61.3, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.8, z: -0.24, r: 46.5, estimated: false }  # 멀티모달
  long_context: { s: 60.6, z: 0.21, r: 53.1, estimated: true }  # 긴문맥
  instruction: { s: 41.1, z: -0.54, r: 42.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — ERNIE 5.0 Thinking Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# ERNIE 5.0 Thinking Preview

Baidu · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.22 | 실측 | [[gpqa-diamond]] 77.6767676767677%×0.4, [[humanitys-last-exam]] 13.253012048192799%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 77.6767676767677%×1.0, [[humanitys-last-exam]] 13.253012048192799%×1.0 |
| 코딩 | 48.9 | -0.07 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[tau2-bench]] 83.9181286549707%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.5 | -0.24 | 실측 | [[mmmu-pro]] 64.5664739884393%×1.0 |
| 긴문맥 | 53.1 | +0.21 | 추정 | (추정) |
| 지시 따르기 | 42.0 | -0.54 | 실측 | [[ifbench]] 41.3605442176871%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
