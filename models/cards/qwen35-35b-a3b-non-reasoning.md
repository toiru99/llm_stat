---
type: Model
title: Qwen3.5 35B A3B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.425
output_speed_tps: 156.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.3, z: -0.24, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.6, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 30.2, z: -0.33, r: 45.1, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.13, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 70.8, z: 0.58, r: 58.7, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Qwen3.5 35B A3B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 156.0 t/s · TTFT 2.09s · 262k ctx` · 가성비 35.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.24 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 45.1 | -0.33 | 실측 | [[gdpval]] 5.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 51.9 | +0.13 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 58.7 | +0.58 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
