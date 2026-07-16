---
type: Model
title: Jamba 1.7 Large
creator: AI21 Labs
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 2.6
output_speed_tps: 56.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.8, z: -0.62, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 13.4, z: -1.06, r: 34.0, estimated: false }  # 추론
  coding: { s: 22.1, z: -1.02, r: 34.7, estimated: false }  # 코딩
  agentic: { s: 8.1, z: -1.1, r: 33.6, estimated: false }  # 에이전트
  trust: { s: 5.9, z: -1.04, r: 34.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.4, z: -0.77, r: 38.4, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.82, r: 37.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.7 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Jamba 1.7 Large

AI21 Labs · Open · Unknown · 컨텍스트 256k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $2.6/1M · 56.0 t/s · TTFT 1.5s · 256k ctx` · 가성비 1.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.62 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 39.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.0 | -1.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 39.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.7 | -1.02 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.6 | -1.1 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 34.5 | -1.04 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.4 | -0.77 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 37.7 | -0.82 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
