---
type: Model
title: Qwen3.5 0.8B
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.01
output_speed_tps: 31.0
context_window: 262000
radar:
  knowledge: { s: 0.0, z: -2.3, r: 15.4, estimated: false }  # 전문 지식
  reasoning: { s: 0.0, z: -2.09, r: 18.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -2.57, r: 11.4, estimated: false }  # 코딩
  agentic: { s: 24.2, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: 73.8, z: 1.42, r: 71.4, estimated: false }  # 신뢰성
  multimodal: { s: 0.0, z: -3.8, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 6.8, z: -2.24, r: 16.5, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -2.28, r: 15.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Qwen3.5 0.8B

Alibaba · Open · 컨텍스트 262k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.01 · 출력 $0.05 · 혼합 $0.01/1M · 31.0 t/s · TTFT 0.78s · 262k ctx` · 가성비 500.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 15.4 | -2.3 | 실측 | [[aa-omniscience]] 1.0%×1.0, [[gpqa-diamond]] 11.0%×0.4, [[humanitys-last-exam]] 1.0%×0.3 |
| 추론 | 18.7 | -2.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 11.0%×1.0, [[humanitys-last-exam]] 1.0%×1.0 |
| 코딩 | 11.4 | -2.57 | 실측 | [[scicode]] 0.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[tau2-bench]] 48.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 71.4 | +1.42 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 0 | -3.8 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 16.5 | -2.24 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 15.8 | -2.28 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
