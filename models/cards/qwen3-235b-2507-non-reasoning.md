---
type: Model
title: Qwen3 235B 2507 (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.299
output_speed_tps: 61.0
context_window: 256000
status: past
size_class: Large
params_b: 235
is_reasoning: false
radar:
  knowledge: { s: 37.5, z: -0.16, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 22.7, z: -0.33, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 28.0, z: -0.36, r: 44.6, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.13, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.2, z: -0.33, r: 45.0, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 235B 2507 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3 235B 2507 (Non-reasoning)

Alibaba · Open · Large(235B) · 컨텍스트 256k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.23 · 출력 $0.92 · 혼합 $0.299/1M · 61.0 t/s · TTFT 2.38s · 256k ctx` · 가성비 40.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.16 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 45.0 | -0.33 | 실측 | [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 44.6 | -0.36 | 실측 | [[tau2-bench]] 33.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.0 | -0.33 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
