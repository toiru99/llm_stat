---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.1415
output_speed_tps: 85.0
context_window: 262000
status: current
size_class: Small
params_b: 9.65
is_reasoning: true
radar:
  knowledge: { s: 38.2, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 36.8, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 43.2, z: -0.17, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 37.1, z: 0.05, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 16.3, z: -0.46, r: 43.1, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.26, r: 53.9, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Small(9.65B) · 컨텍스트 262k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.2 · 혼합 $0.1415/1M · 85.0 t/s · TTFT 1.63s · 262k ctx` · 가성비 155.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 47.5 | -0.17 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 50.8 | +0.05 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 43.1 | -0.46 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 53.9 | +0.26 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
