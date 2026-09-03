---
type: Model
title: Qwen3 235B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.91
output_speed_tps: 63.0
context_window: 32800
status: past
size_class: Large
params_b: 235
is_reasoning: false
radar:
  knowledge: { s: 31.7, z: -0.44, r: 43.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 35.3, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.74, r: 38.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 235B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 235B (Non-reasoning)

Alibaba · Open · Large(235B) · 컨텍스트 32k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $2.8 · 혼합 $0.91/1M · 63.0 t/s · TTFT 2.73s · 32k ctx` · 가성비 12.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.4 | -0.44 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 38.8 | -0.75 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 38.9 | -0.74 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
