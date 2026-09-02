---
type: Model
title: Qwen3.5 27B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.51
output_speed_tps: 81.0
context_window: 262000
status: past
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 38.5, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 55.9, z: 0.39, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 68.2, z: 1.21, r: 68.2, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.03, r: 49.6, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 73.5, z: 0.72, r: 60.9, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.5 27B (Non-reasoning)

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 81.0 t/s · TTFT 5.57s · 262k ctx` · 가성비 58.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 55.9 | +0.39 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 68.2 | +1.21 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 49.6 | -0.03 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 60.9 | +0.72 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
