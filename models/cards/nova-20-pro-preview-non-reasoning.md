---
type: Model
title: Nova 2.0 Pro Preview (non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.125
output_speed_tps: 119.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.0, z: -0.5, r: 42.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.9, z: -0.53, r: 42.1, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 21.9, z: -0.42, r: 43.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.7, z: -0.56, r: 41.6, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.15, r: 52.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Nova 2.0 Pro Preview (non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 119.0 t/s · TTFT 1.05s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.5 | -0.5 | 실측 | [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.1 | -0.53 | 실측 | [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 43.7 | -0.42 | 실측 | [[gdpval]] 339.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.6 | -0.56 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 52.3 | +0.15 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
