---
type: Model
title: gpt-oss-20b (high)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 126.2352284679975
context_window: 131072
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 44.8, z: -0.1, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 40.4, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 30.8, z: -0.58, r: 41.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.1, z: -0.57, r: 41.5, estimated: false }  # 긴문맥
  instruction: { s: 74.4, z: 1.0, r: 64.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# gpt-oss-20b (high)

OpenAI · Open · Small(21B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.22 · 혼합 $0.067/1M · 126.2352284679975 t/s · TTFT 1.29280251627257s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.1 | 실측 | [[gpqa-diamond]] 68.7879%×0.4, [[humanitys-last-exam]] 10.9824%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 68.7879%×1.0, [[humanitys-last-exam]] 10.9824%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[scicode]] 38.8889%×1.0, [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 41.4 | -0.58 | 실측 | [[gdpval]] 347.13 Elo×1.0, [[tau2-bench]] 60.2339%×1.0, [[tau3-banking]] 7.01031%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.5 | -0.57 | 실측 | [[aa-lcr]] 34.6667%×1.0 |
| 지시 따르기 | 64.9 | +1.0 | 실측 | [[ifbench]] 65.102%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
