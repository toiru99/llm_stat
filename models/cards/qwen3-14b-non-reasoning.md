---
type: Model
title: Qwen3 14B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.455
output_speed_tps: 58.0
context_window: 32800
status: past
size_class: Small
params_b: 14.8
is_reasoning: false
radar:
  knowledge: { s: 23.0, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.92, r: 36.3, estimated: false }  # 추론
  coding: { s: 32.5, z: -0.63, r: 40.6, estimated: false }  # 코딩
  agentic: { s: 19.9, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.49, r: 27.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 14B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3 14B (Non-reasoning)

Alibaba · Open · Small(14.8B) · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.35 · 출력 $1.4 · 혼합 $0.455/1M · 58.0 t/s · TTFT 2.77s · 32k ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.3 | -0.92 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.6 | -0.63 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 40.1 | -0.66 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.7 | -1.49 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
