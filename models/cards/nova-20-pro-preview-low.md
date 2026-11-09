---
type: Model
title: Nova 2.0 Pro Preview (low)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.125
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: -0.15, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 41.1, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.37, r: 44.5, estimated: false }  # 코딩
  agentic: { s: 25.1, z: -0.32, r: 45.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.9, z: -0.33, r: 45.0, estimated: false }  # 멀티모달
  long_context: { s: 72.9, z: 0.61, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 94.8, z: 1.78, r: 76.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Nova 2.0 Pro Preview (low)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.15 | 실측 | [[gpqa-diamond]] 75.1%×0.4, [[humanitys-last-exam]] 5.2%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[gpqa-diamond]] 75.1%×1.0, [[humanitys-last-exam]] 5.2%×1.0 |
| 코딩 | 44.5 | -0.37 | 실측 | [[terminal-bench]] 17.4%×0.5 |
| 에이전트 | 45.2 | -0.32 | 실측 | [[gdpval]] 444.0%×1.0, [[terminal-bench]] 17.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.0 | -0.33 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 59.1 | +0.61 | 실측 | [[aa-lcr]] 64.7%×1.0 |
| 지시 따르기 | 76.7 | +1.78 | 실측 | [[ifbench]] 79.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
