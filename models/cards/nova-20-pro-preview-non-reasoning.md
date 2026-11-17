---
type: Model
title: Nova 2.0 Pro Preview (non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.125
output_speed_tps: 108.85957139600713
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.3, z: -0.48, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 22.1, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 43.4, z: -0.04, r: 49.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.8, z: -0.58, r: 41.3, estimated: false }  # 긴문맥
  instruction: { s: 56.1, z: 0.1, r: 51.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nova 2.0 Pro Preview (non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 108.85957139600713 t/s · TTFT 1.3439426937563301s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.48 | 실측 | [[gpqa-diamond]] 63.636363636363605%×0.4, [[humanitys-last-exam]] 3.93883225208526%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.636363636363605%×1.0, [[humanitys-last-exam]] 3.93883225208526%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 16.6666666666667%×0.5 |
| 에이전트 | 49.4 | -0.04 | 실측 | [[gdpval]] 338.76%×1.0, [[tau2-bench]] 71.6374269005848%×1.0, [[terminal-bench]] 16.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.3 | -0.58 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 51.5 | +0.1 | 실측 | [[ifbench]] 52.0408163265306%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
