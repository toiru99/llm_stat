---
type: Model
title: Ling-flash-2.0
creator: InclusionAI
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.183
output_speed_tps: 66.0
context_window: 128000
status: past
size_class: Medium
params_b: 103
is_reasoning: false
radar:
  knowledge: { s: 30.1, z: -0.53, r: 42.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.46, r: 43.0, estimated: false }  # 추론
  coding: { s: 37.8, z: -0.4, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -0.67, r: 39.9, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.7, z: -0.89, r: 36.6, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.92, r: 36.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-flash-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Ling-flash-2.0

InclusionAI · Open · Medium(103B) · 컨텍스트 128k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.14 · 출력 $0.57 · 혼합 $0.183/1M · 66.0 t/s · TTFT 1.91s · 128k ctx` · 가성비 54.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.0 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 44.1 | -0.4 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 39.9 | -0.67 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.6 | -0.89 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 36.2 | -0.92 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
