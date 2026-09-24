---
type: Model
title: Qwen3 30B A3B 2507 (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.26
output_speed_tps: 140.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.3, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.5, r: 42.6, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.9, r: 36.6, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.08, r: 33.8, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.2, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.99, r: 35.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B A3B 2507 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Qwen3 30B A3B 2507 (Non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · 140.0 t/s · TTFT 1.97s · 262k ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.6 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 36.6 | -0.9 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 33.8 | -1.08 | 실측 | [[tau2-bench]] 10.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 35.1 | -0.99 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
