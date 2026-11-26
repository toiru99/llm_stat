---
type: Model
title: Nova 2.0 Lite (non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 107.769709246363
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.4, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 36.4, z: -0.38, r: 44.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 46.0, z: -1.3, r: 30.6, estimated: false }  # 멀티모달
  long_context: { s: 21.1, z: -1.12, r: 33.2, estimated: false }  # 긴문맥
  instruction: { s: 39.9, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Nova 2.0 Lite (non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 107.769709246363 t/s · TTFT 1.75886611072042s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 60.303%×0.4, [[humanitys-last-exam]] 2.87303%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 60.303%×1.0, [[humanitys-last-exam]] 2.87303%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 44.4 | -0.38 | 실측 | [[tau2-bench]] 61.9883%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 30.6 | -1.3 | 실측 | [[mmmu-pro]] 49.0173%×1.0 |
| 긴문맥 | 33.2 | -1.12 | 실측 | [[aa-lcr]] 18.6667%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 40.5442%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
