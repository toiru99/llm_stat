---
type: Model
title: JT-35B-Flash
creator: China Mobile
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 51.5, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.22, r: 46.6, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 71.8, z: 0.87, r: 63.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.5, r: 57.5, estimated: false }  # 긴문맥
  instruction: { s: 42.0, z: -0.35, r: 44.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-35B-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# JT-35B-Flash

China Mobile · Proprietary · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[gpqa-diamond]] 82.9293%×0.4, [[humanitys-last-exam]] 6.44115%×0.3 |
| 추론 | 46.6 | -0.22 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 82.9293%×1.0, [[humanitys-last-exam]] 6.44115%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 63.1 | +0.87 | 실측 | [[tau2-bench]] 99.1228%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.5 | +0.5 | 실측 | [[aa-lcr]] 65.6667%×1.0 |
| 지시 따르기 | 44.8 | -0.35 | 실측 | [[ifbench]] 42.0408%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
