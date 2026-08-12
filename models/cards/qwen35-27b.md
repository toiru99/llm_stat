---
type: Model
title: Qwen3.5 27B
creator: Alibaba
license: Open
intelligence_index: 35.0
price_blended_usd_1m: 0.51
output_speed_tps: 77.0
context_window: 262000
status: past
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 47.2, z: 0.31, r: 54.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.4, z: 0.52, r: 57.8, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.52, r: 57.9, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.31, r: 69.7, estimated: false }  # 에이전트
  trust: { s: 19.8, z: -0.3, r: 45.6, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 77.0 t/s · TTFT 5.68s · 262k ctx` · 가성비 68.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.31 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 57.8 | +0.52 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 57.9 | +0.52 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 69.7 | +1.31 | 실측 | [[itbench]] 35.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 45.6 | -0.3 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
