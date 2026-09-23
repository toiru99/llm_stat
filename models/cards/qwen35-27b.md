---
type: Model
title: Qwen3.5 27B
creator: Alibaba
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.51
output_speed_tps: 75.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: 0.35, r: 55.3, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.52, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.19, r: 67.9, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.12, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.51, r: 72.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 75.0 t/s · TTFT 5.69s · 262k ctx` · 가성비 45.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 55.3 | +0.35 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 57.7 | +0.52 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 67.9 | +1.19 | 실측 | [[itbench]] 35.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 66.9 | +1.12 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 72.7 | +1.51 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
