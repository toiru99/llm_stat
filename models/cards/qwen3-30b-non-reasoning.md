---
type: Model
title: Qwen3 30B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.26
output_speed_tps: 105.0
context_window: 32800
status: past
size_class: Small
params_b: 30.5
is_reasoning: false
radar:
  knowledge: { s: 23.4, z: -0.85, r: 37.3, estimated: false }  # 전문 지식
  reasoning: { s: 18.8, z: -0.79, r: 38.1, estimated: false }  # 추론
  coding: { s: 31.5, z: -0.65, r: 40.2, estimated: false }  # 코딩
  agentic: { s: 16.4, z: -0.82, r: 37.8, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.73, r: 39.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.04, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 30B (Non-reasoning)

Alibaba · Open · Small(30.5B) · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · 105.0 t/s · TTFT 2.3s · 32k ctx` · 가성비 26.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 38.1 | -0.79 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 40.2 | -0.65 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.8 | -0.82 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 34.5 | -1.04 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
