---
type: Model
title: Qwen3 235B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.91
output_speed_tps: 62.0
context_window: 32800
status: past
size_class: Large
params_b: 235
is_reasoning: false
radar:
  knowledge: { s: 31.5, z: -0.45, r: 43.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.5, z: -0.65, r: 40.2, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.81, r: 37.9, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -0.74, r: 38.9, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.73, r: 39.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 235B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3 235B (Non-reasoning)

Alibaba · Open · Large(235B) · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $2.8 · 혼합 $0.91/1M · 62.0 t/s · TTFT 2.69s · 32k ctx` · 가성비 5.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.2 | -0.45 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.2 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.9 | -0.81 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 38.9 | -0.74 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 39.0 | -0.73 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
