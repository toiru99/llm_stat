---
type: Model
title: Nova Micro
creator: Amazon
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: 0.03
output_speed_tps: 291.0
context_window: 130000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.11, r: 33.4, estimated: false }  # 전문 지식
  reasoning: { s: 12.9, z: -1.09, r: 33.7, estimated: false }  # 추론
  coding: { s: 11.0, z: -1.48, r: 27.8, estimated: false }  # 코딩
  agentic: { s: 8.6, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: 40.0, z: 0.57, r: 58.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.2, z: -1.04, r: 34.4, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.17, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Nova Micro

Amazon · Proprietary · Unknown · 컨텍스트 130k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $0.03/1M · 291.0 t/s · TTFT 0.96s · 130k ctx` · 가성비 166.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.4 | -1.11 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.7 | -1.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 27.8 | -1.48 | 실측 | [[scicode]] 9.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[tau2-bench]] 14.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 58.5 | +0.57 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.4 | -1.04 | 실측 | [[aa-lcr]] 10.0%×1.0 |
| 지시 따르기 | 32.5 | -1.17 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
