---
type: Model
title: Qwen3.5 4B
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.042
output_speed_tps: 25.0
context_window: 262000
status: current
size_class: Small
params_b: 4.66
is_reasoning: true
radar:
  knowledge: { s: 34.4, z: -0.32, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.8, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 26.9, z: -0.87, r: 36.9, estimated: false }  # 코딩
  agentic: { s: 44.6, z: 0.31, r: 54.7, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.63, r: 40.5, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 73.5, z: 0.7, r: 60.5, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.09, r: 51.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Qwen3.5 4B

Alibaba · Open · Small(4.66B) · 컨텍스트 262k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 25.0 t/s · TTFT 0.78s · 262k ctx` · 가성비 476.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.32 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 36.9 | -0.87 | 실측 | [[scicode]] 16.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 54.7 | +0.31 | 실측 | [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 40.5 | -0.63 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 60.5 | +0.7 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 51.3 | +0.09 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
