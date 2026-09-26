---
type: Model
title: Qwen3.6 27B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.9
output_speed_tps: 63.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.0, z: -0.12, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.11, r: 48.3, estimated: false }  # 코딩
  agentic: { s: 44.3, z: 0.25, r: 53.8, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.23, r: 46.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.6 27B (Non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 63.0 t/s · TTFT 3.67s · 262k ctx` · 가성비 22.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.12 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 48.3 | -0.11 | 실측 | [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 53.8 | +0.25 | 실측 | [[gdpval]] 22.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
