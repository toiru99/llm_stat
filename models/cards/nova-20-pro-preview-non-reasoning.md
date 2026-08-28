---
type: Model
title: Nova 2.0 Pro Preview (Non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 2.125
output_speed_tps: 108.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.3, z: -0.47, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.0, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 39.7, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 34.3, z: -0.1, r: 48.5, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.26, r: 46.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.3, z: -0.37, r: 44.5, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.17, r: 52.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Nova 2.0 Pro Preview (Non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 108.0 t/s · TTFT 1.04s · 256k ctx` · 가성비 6.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.3 | -0.58 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 48.5 | -0.1 | 실측 | [[gdpval]] 3.0%×1.0, [[tau2-bench]] 72.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 46.0 | -0.26 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.5 | -0.37 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
