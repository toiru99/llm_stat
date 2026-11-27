---
type: Model
title: Nova 2.0 Pro Preview (non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.125
output_speed_tps: 112.58426502252
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.3, z: -0.46, r: 43.1, estimated: false }  # 전문 지식
  reasoning: { s: 22.1, z: -0.65, r: 40.2, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 43.4, z: -0.13, r: 48.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.8, z: -0.73, r: 39.0, estimated: false }  # 긴문맥
  instruction: { s: 56.1, z: 0.23, r: 53.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Nova 2.0 Pro Preview (non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 112.58426502252 t/s · TTFT 1.50113336994904s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.1 | -0.46 | 실측 | [[gpqa-diamond]] 63.6364%×0.4, [[humanitys-last-exam]] 3.93883%×0.3 |
| 추론 | 40.2 | -0.65 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 63.6364%×1.0, [[humanitys-last-exam]] 3.93883%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 16.6667%×0.5 |
| 에이전트 | 48.0 | -0.13 | 실측 | [[gdpval]] 338.46 Elo×1.0, [[tau2-bench]] 71.6374%×1.0, [[terminal-bench]] 16.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.0 | -0.73 | 실측 | [[aa-lcr]] 30%×1.0 |
| 지시 따르기 | 53.5 | +0.23 | 실측 | [[ifbench]] 52.0408%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
