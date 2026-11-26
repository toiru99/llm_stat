---
type: Model
title: GPT-4.1 nano
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0775
output_speed_tps: 160.976231487213
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.9, z: -0.87, r: 37.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.32, r: 30.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 34.2, z: -1.9, r: 21.5, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -1.06, r: 34.0, estimated: false }  # 긴문맥
  instruction: { s: 28.0, z: -0.93, r: 36.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-4.1 nano

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.0775/1M · 160.976231487213 t/s · TTFT 0.985686988979145s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.0 | -0.87 | 실측 | [[gpqa-diamond]] 51.2121%×0.4, [[humanitys-last-exam]] 3.75348%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.2121%×1.0, [[humanitys-last-exam]] 3.75348%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 30.1 | -1.32 | 실측 | [[gdpval]] -206.26 Elo×1.0, [[tau2-bench]] 17.2515%×1.0, [[tau3-banking]] 3.50515%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 21.5 | -1.9 | 실측 | [[mmmu-pro]] 40.1156%×1.0 |
| 긴문맥 | 34.0 | -1.06 | 실측 | [[aa-lcr]] 20.3333%×1.0 |
| 지시 따르기 | 36.0 | -0.93 | 실측 | [[ifbench]] 32.0408%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
