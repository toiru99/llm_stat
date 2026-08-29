---
type: Model
title: Qwen3.5 27B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.51
output_speed_tps: 82.0
context_window: 262000
status: past
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 39.2, z: -0.07, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 37.0, z: 0.13, r: 51.9, estimated: false }  # 추론
  coding: { s: 57.3, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 68.2, z: 1.23, r: 68.4, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.01, r: 49.8, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.6, estimated: false }  # 멀티모달
  long_context: { s: 73.5, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.13, r: 48.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3.5 27B (Non-reasoning)

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 82.0 t/s · TTFT 5.6s · 262k ctx` · 가성비 58.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.07 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.9 | +0.13 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 68.4 | +1.23 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 55.6 | +0.37 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 48.1 | -0.13 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
