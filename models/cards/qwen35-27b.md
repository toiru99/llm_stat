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
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 46.0, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.41, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.1, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 75.0 t/s · TTFT 5.63s · 262k ctx` · 가성비 45.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[itbench]] 35.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 66.6 | +1.1 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
