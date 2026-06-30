---
type: Model
title: Qwen3.5 2B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.03
output_speed_tps: 26.0
context_window: 262000
radar:
  knowledge: { s: 14.2, z: -1.67, r: 25.0, estimated: false }  # 전문 지식
  reasoning: { s: 14.7, z: -1.4, r: 29.1, estimated: false }  # 추론
  coding: { s: 5.4, z: -2.34, r: 15.0, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.97, r: 35.4, estimated: false }  # 에이전트
  trust: { s: 51.2, z: 0.63, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: 29.3, z: -2.32, r: 15.3, estimated: false }  # 멀티모달
  long_context: { s: 32.4, z: -1.33, r: 30.0, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.69, r: 24.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Qwen3.5 2B

Alibaba · Open · 컨텍스트 262k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.03/1M · 26.0 t/s · TTFT 0.83s · 262k ctx` · 가성비 333.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.0 | -1.67 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 29.1 | -1.4 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 15.0 | -2.34 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 35.4 | -0.97 | 실측 | [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | 15.3 | -2.32 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 30.0 | -1.33 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 24.7 | -1.69 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
