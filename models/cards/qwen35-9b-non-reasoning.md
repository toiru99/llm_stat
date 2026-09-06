---
type: Model
title: Qwen3.5 9B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.178
output_speed_tps: 85.0
context_window: 262000
status: current
size_class: Small
params_b: 9.65
is_reasoning: false
radar:
  knowledge: { s: 33.6, z: -0.35, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.17, r: 47.4, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.73, r: 61.0, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.16, r: 32.6, estimated: false }  # 신뢰성
  multimodal: { s: 72.2, z: 0.1, r: 51.5, estimated: false }  # 멀티모달
  long_context: { s: 51.7, z: 0.08, r: 51.2, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.67, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.5 9B (Non-reasoning)

Alibaba · Open · Small(9.65B) · 컨텍스트 262k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.17 · 출력 $0.25 · 혼합 $0.178/1M · 85.0 t/s · TTFT 0.79s · 262k ctx` · 가성비 78.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 47.4 | -0.17 | 실측 | [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 61.0 | +0.73 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 51.5 | +0.1 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 51.2 | +0.08 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 39.9 | -0.67 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
