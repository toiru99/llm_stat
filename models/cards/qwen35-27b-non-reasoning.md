---
type: Model
title: Qwen3.5 27B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.51
output_speed_tps: 83.0
context_window: 262000
status: past
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 38.5, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: 0.08, r: 51.3, estimated: false }  # 추론
  coding: { s: 55.9, z: 0.37, r: 55.6, estimated: false }  # 코딩
  agentic: { s: 68.2, z: 1.19, r: 67.9, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.04, r: 49.3, estimated: false }  # 신뢰성
  multimodal: { s: 77.5, z: 0.34, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 73.5, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.15, r: 47.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3.5 27B (Non-reasoning)

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 83.0 t/s · TTFT 5.61s · 262k ctx` · 가성비 58.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.3 | +0.08 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 55.6 | +0.37 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 67.9 | +1.19 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 49.3 | -0.04 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 55.2 | +0.34 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 47.7 | -0.15 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
