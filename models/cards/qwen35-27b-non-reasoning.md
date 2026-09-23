---
type: Model
title: Qwen3.5 27B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.51
output_speed_tps: 81.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.1, z: -0.17, r: 47.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.46, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 68.2, z: 1.16, r: 67.5, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.09, r: 48.6, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.25, r: 53.7, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.18, r: 47.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Qwen3.5 27B (Non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 81.0 t/s · TTFT 5.68s · 262k ctx` · 가성비 37.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.4 | -0.17 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 57.0 | +0.46 | 실측 | [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 67.5 | +1.16 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 53.7 | +0.25 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 47.3 | -0.18 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
