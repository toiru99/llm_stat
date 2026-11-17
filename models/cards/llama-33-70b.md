---
type: Model
title: Llama 3.3 70B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.611
output_speed_tps: 75.23535336247348
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.93, r: 36.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 13.9, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.7, z: -1.06, r: 34.1, estimated: false }  # 긴문맥
  instruction: { s: 49.1, z: -0.19, r: 47.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Llama 3.3 70B

Meta · Open · Medium · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.6 · 출력 $0.71 · 혼합 $0.611/1M · 75.23535336247348 t/s · TTFT 1.7806798182784835s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.1 | -0.93 | 실측 | [[gpqa-diamond]] 49.7979797979798%×0.4, [[humanitys-last-exam]] 3.56%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.7979797979798%×1.0, [[humanitys-last-exam]] 3.56%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.03030303030303%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[gdpval]] -166.46%×1.0, [[tau2-bench]] 26.6081871345029%×1.0, [[terminal-bench]] 3.03030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.1 | -1.06 | 실측 | [[aa-lcr]] 15.666666666666702%×1.0 |
| 지시 따르기 | 47.1 | -0.19 | 실측 | [[ifbench]] 47.0748299319728%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
