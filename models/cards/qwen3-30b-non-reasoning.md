---
type: Model
title: Qwen3 30B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.26
output_speed_tps: 104.0
context_window: 32800
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.2, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 18.5, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.87, r: 37.0, estimated: false }  # 코딩
  agentic: { s: 16.4, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.79, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.5, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3 30B (Non-reasoning)

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · 104.0 t/s · TTFT 2.35s · 32k ctx` · 가성비 26.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.0 | -0.87 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.1 | -0.79 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.5 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
