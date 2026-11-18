---
type: Model
title: Sarvam 105B (high)
creator: Sarvam
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0436
output_speed_tps: 181.46034226362852
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.2, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.28, r: 30.8, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.7, r: 39.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 31.2, z: -0.95, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sarvam 105B (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Sarvam 105B (high)

Sarvam · Open · Medium · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.042 · 출력 $0.17 · 혼합 $0.0436/1M · 181.46034226362852 t/s · TTFT 2.433390904954998s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 73.8383838383838%×0.4, [[humanitys-last-exam]] 11.028730305838701%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.8383838383838%×1.0, [[humanitys-last-exam]] 11.028730305838701%×1.0 |
| 코딩 | 30.8 | -1.28 | 실측 | [[terminal-bench]] 1.51515151515152%×0.5 |
| 에이전트 | 39.6 | -0.7 | 실측 | [[tau2-bench]] 46.783625730994096%×1.0, [[terminal-bench]] 1.51515151515152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.8 | -0.95 | 실측 | [[ifbench]] 34.3537414965986%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
