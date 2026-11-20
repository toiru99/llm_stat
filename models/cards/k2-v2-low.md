---
type: Model
title: K2-V2 (low)
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.8, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.85, r: 37.2, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.12, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 13.9, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.91, r: 36.3, estimated: false }  # 긴문맥
  instruction: { s: 40.5, z: -0.56, r: 41.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# K2-V2 (low)

Institute of Foundation Models · Open · Medium · 컨텍스트 512k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 54.1414141414141%×0.4, [[humanitys-last-exam]] 3.6144578313252995%×0.3 |
| 추론 | 37.2 | -0.85 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.1414141414141%×1.0, [[humanitys-last-exam]] 3.6144578313252995%×1.0 |
| 코딩 | 33.1 | -1.12 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[tau2-bench]] 20.7602339181287%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.3 | -0.91 | 실측 | [[aa-lcr]] 20.3333333333333%×1.0 |
| 지시 따르기 | 41.6 | -0.56 | 실측 | [[ifbench]] 40.952380952381%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
