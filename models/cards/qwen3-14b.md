---
type: Model
title: Qwen3 14B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.132
output_speed_tps: 42.7969071768407
context_window: 32768
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.5, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.72, r: 39.3, estimated: false }  # 추론
  coding: { s: 27.9, z: -0.41, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 17.0, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 39.9, z: -0.58, r: 41.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Qwen3 14B

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.12 · 출력 $0.24 · 혼합 $0.132/1M · 42.7969071768407 t/s · TTFT 0.565790105959238s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[gpqa-diamond]] 60.4040404040404%×0.4, [[humanitys-last-exam]] 4.53%×0.3 |
| 추론 | 39.3 | -0.72 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.4040404040404%×1.0, [[humanitys-last-exam]] 4.53%×1.0 |
| 코딩 | 43.8 | -0.41 | 실측 | [[scicode]] 30.6712962962963%×1.0, [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[gdpval]] -17.57%×1.0, [[tau2-bench]] 34.5029239766082%×1.0, [[tau3-banking]] 5.56701030927835%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 41.2 | -0.58 | 실측 | [[ifbench]] 40.5442176870748%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
