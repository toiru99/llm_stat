---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.1415
output_speed_tps: 82.0
context_window: 262000
status: current
size_class: Small
params_b: 9.65
is_reasoning: true
radar:
  knowledge: { s: 37.7, z: -0.15, r: 47.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.6, z: 0.02, r: 50.4, estimated: false }  # 추론
  coding: { s: 36.4, z: 0.15, r: 52.2, estimated: false }  # 코딩
  agentic: { s: 36.0, z: -0.06, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.48, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 75.0, z: 0.24, r: 53.6, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Small(9.65B) · 컨텍스트 262k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.2 · 혼합 $0.1415/1M · 82.0 t/s · TTFT 1.73s · 262k ctx` · 가성비 106.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.7 | -0.15 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 50.4 | +0.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 52.2 | +0.15 | 실측 | [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 49.2 | -0.06 | 실측 | [[gdpval]] 4.0%×1.0, [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 42.9 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 53.6 | +0.24 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
