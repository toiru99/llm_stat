---
type: Model
title: Qwen3 8B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.232
output_speed_tps: 40.0
context_window: 32800
status: past
size_class: Small
params_b: 8.19
is_reasoning: false
radar:
  knowledge: { s: 19.5, z: -1.03, r: 34.5, estimated: false }  # 전문 지식
  reasoning: { s: 14.1, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.02, r: 34.8, estimated: false }  # 코딩
  agentic: { s: 14.1, z: -0.89, r: 36.6, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.06, r: 34.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.2, r: 32.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 8B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 8B (Non-reasoning)

Alibaba · Open · Small(8.19B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.18 · 출력 $0.7 · 혼합 $0.232/1M · 40.0 t/s · TTFT 3.65s · 32k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.5 | -1.03 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 34.8 | -1.02 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 36.6 | -0.89 | 실측 | [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 32.0 | -1.2 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
