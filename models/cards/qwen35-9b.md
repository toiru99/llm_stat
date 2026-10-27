---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.1415
output_speed_tps: 60.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.6, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 37.7, z: -0.01, r: 49.9, estimated: false }  # 코딩
  agentic: { s: 24.1, z: -0.37, r: 44.5, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.58, r: 41.3, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.2 · 혼합 $0.1415/1M · 60.0 t/s · TTFT 1.98s · 262k ctx` · 가성비 77.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 49.9 | -0.01 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 44.5 | -0.37 | 실측 | [[gdpval]] 419.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 41.3 | -0.58 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.8 | +0.98 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
